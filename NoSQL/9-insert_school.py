#!/usr/bin/env python3
""" Inserts a new document in a collection """

def insert_school(mongo_collection, **kwargs):
    """Insert a new document into the collection and return its _id"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
