#!/usr/bin/env python3
"""
function for pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Return a tuple containing a start index and an end index
    corresponding to the range of indexes for a given page and page size.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
