#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify, abort
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Resource, Task, Score
from helpers import *

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


@app.route('/resources', methods=['GET'])
def resources():
    resources = [resource.to_dict() for resource in Resource.query.all()]
    reponse = make_response(resources, 200)
    return reponse

@app.route('/tasks', methods=['GET'])
def tasks():
    tasks = [task.to_dict() for task in Task.query.all()]
    reponse = make_response(tasks, 200)
    return reponse

@app.route('/perform_task/<int:id>', methods=['DELETE'])
def perform_task(id):
    task = Task.query.filter_by(id=id).first()
    if not task:
        abort(404, "The task was not found")
    resource = Resource.query.filter_by(id=task.resource_id).first()
    resource.quantity += task.reward
    db.session.delete(task)
    db.session.commit()
    decrease_resource()
    response = make_response("", 204)
    return response

@app.route('/refresh_tasks', methods=['GET'])
def refresh_tasks():
    seed_tasks()
    tasks = [task.to_dict() for task in Task.query.all()]
    reponse = make_response(tasks, 200)
    return reponse



if __name__ == '__main__':
    app.run(port=5555, debug=True)

