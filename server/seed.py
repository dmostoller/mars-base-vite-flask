#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from config import app
import random
from models import *

if __name__ == "__main__":
    with app.app_context():
        
        print("Clearing tables....")

        Resource.query.delete()
        Task.query.delete()
        # Score.query.delete()

        # print("Loading default leaderboard......")
        # dave_high_score = Score(username = "Dave", num_turns = 21, game_won = True)
        # yasi_high_score = Score(username = "Yasi", num_turns = 12, game_won = True)
        # db.session.add(dave_high_score)
        # db.session.add(yasi_high_score)
        # db.session.commit()

        print("Loading available resources......")

        air = Resource(name = "Air", quantity = 50, color = "yellow")
        food = Resource(name = "Food", quantity = 50, color = "green")
        fuel = Resource(name = "Fuel", quantity = 50, color = "red")        
        water = Resource(name = "Water", quantity = 50, color = "blue")

        db.session.add(air)
        db.session.add(food)
        db.session.add(fuel)
        db.session.add(water)
        db.session.commit()  

        print("Loading active tasks.......")
 
        tasks = []

        tasks.append(Task(
            name = "Change Air Filters", 
            description = "clean and replace the HVAC system air filters", 
            reward = random.randint(10,50),
            resource_id = air.id 
        ))
        tasks.append(Task(
            name = "Plant Seeds", 
            description = "plant new seeds in the soil of the hydroponic farm", 
            reward = random.randint(10,50),
            resource_id = food.id 
        ))
        tasks.append(Task(
            name = "Mine Ore", 
            description = "mine for ore that you can refined into fuel", 
            reward = random.randint(10,50),
            resource_id = fuel.id 
        ))
        tasks.append(Task(
            name = "Repair Valve", 
            description = "repair leaky valve on the main water pipe", 
            reward = random.randint(10,50),
            resource_id = water.id 
        ))
        tasks.append(Task(
            name = "Repair Air Conditioning", 
            description = "repair the main condensor on the A/C unit", 
            reward = random.randint(10,50),
            resource_id = air.id 
        ))
        tasks.append(Task(
            name = "Fertilize Soil", 
            description = "add fertilizer to the soil in the hydroponic farm", 
            reward = random.randint(10,50),
            resource_id = food.id 
        ))
        tasks.append(Task(
            name = "Refine Ore", 
            description = "refine the mined ore into its component elements", 
            reward = random.randint(10,50),
            resource_id = fuel.id 
        ))
        tasks.append(Task(
            name = "Clean Algae Vats", 
            description = "clean the algae vats that filter the water supply", 
            reward = random.randint(10,50),
            resource_id = water.id 
        ))
        
        db.session.add_all(tasks)
        db.session.commit()