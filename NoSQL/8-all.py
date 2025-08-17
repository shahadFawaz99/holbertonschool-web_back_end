#!/usr/bin/env python3
""" Lists all documents in a collection """

def list_all(mongo_collection):
    """Return a list of all documents in a collection"""
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
