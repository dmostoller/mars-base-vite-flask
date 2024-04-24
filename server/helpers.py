from models import *
import random


def seed_tasks():
    Task.query.delete()

    air = db.session.get(Resource, 1)
    food = db.session.get(Resource, 2)
    fuel = db.session.get(Resource, 3)
    water = db.session.get(Resource, 4)
    
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
    tasks.append(Task(
        name = "Repair Fan Motor", 
        description = "repair or replace the motor for the air system fan", 
        reward = random.randint(10,50),
        resource_id = air.id 
    ))
    tasks.append(Task(
        name = "Till Soil", 
        description = "turn and till the soil of the hydroponic farm", 
        reward = random.randint(10,50),
        resource_id = food.id 
    ))
    tasks.append(Task(
        name = "Refill Fuel Cells", 
        description = "refill the base's fuel cells with refined ore", 
        reward = random.randint(10,50),
        resource_id = fuel.id 
    ))
    tasks.append(Task(
        name = "Test Bacterial Levels", 
        description = "test the water supply for bacteria and organisms", 
        reward = random.randint(10,50),
        resource_id = water.id 
    ))              
        
    db.session.add_all(tasks)
    db.session.commit()
 
