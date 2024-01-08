const express = require('express');
const Joi = require('joi');
const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'users.json');

const userSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().min(2),
});

const app = express();

app.use(express.json());

const users = [];
let uId = 0;

app.get('/users', (req, res) => {
    const usersFile = fs.readFileSync(pathFile, 'utf8');
    const users = JSON.parse(usersFile);
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const usersFile = fs.readFileSync(pathFile, 'utf8');
    const users = JSON.parse(usersFile);

    const user = users.find((user) => user.id === +req.params.id);

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.post('/users', (req, res) => {
    const result = userSchema.validate(req.body);

    if (result.error) {
        return res
            .status(500)
            .send({ error: result.error.details });
    }

    uId += 1;

    users.push({
        id: uId,
        ...req.body,
    });

    fs.writeFile(pathFile, JSON.stringify(users, null, 2));

    res.send({ id: uId });
});

app.put('/users/:id', (req, res) => {
    const result = userSchema.validate(req.body);

    if (result.error) {
        return res
            .status(500)
            .send({ error: result.error.details });
    }

    const usersFile = fs.readFileSync(pathFile, 'utf8');
    const users = JSON.parse(usersFile);

    const user = users.find((user) => user.id === +req.params.id);

    if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFile(pathFile, JSON.stringify(users, null, 2));
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const usersFile = fs.readFileSync(pathFile, 'utf8');
    const users = JSON.parse(usersFile);

    const user = users.find((user) => user.id === +req.params.id);

    if (user) {
        const userIndex = users.indexOf(user);

        users.splice(userIndex, 1);

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(3000);