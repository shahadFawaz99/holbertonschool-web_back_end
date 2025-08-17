#!/usr/bin/env python3
""" Returns the list of schools that teach a specific topic """

def schools_by_topic(mongo_collection, topic):
    """Return all school documents that have the given topic in their 'topics' list"""
    return list(mongo_collection.find({"topics": topic}))
