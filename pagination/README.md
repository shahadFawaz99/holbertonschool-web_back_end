# Pagination Project

This project is part of the **Holberton School - Web Back End** curriculum.  
It focuses on implementing **pagination** in Python using different approaches.

---

## Files

- **0-simple_helper_function.py**  
  Implements a helper function `index_range(page, page_size)` that returns the start and end index for a given page and page size.

- **1-simple_pagination.py**  
  Implements the `Server` class with:
  - `dataset()` → loads and caches data from `Popular_Baby_Names.csv`
  - `get_page(page, page_size)` → returns a specific page of the dataset, using `index_range`.

- **2-hypermedia_pagination.py**  
  Extends the `Server` class with:
  - `get_hyper(page, page_size)` → returns a dictionary with pagination metadata:
    - `page_size`
    - `page`
    - `data`
    - `next_page`
    - `prev_page`
    - `total_pages`

- **3-hypermedia_del_pagination.py**  
  Extends pagination to handle deletions in the dataset.  
  - `get_hyper_index(index, page_size)` → returns a dictionary with:
    - `index`
    - `data`
    - `page_size`
    - `next_index`  
  Ensures pagination remains consistent even if rows are deleted between queries.

---

## Dataset

The project uses the dataset:
**`Popular_Baby_Names.csv`**

- Contains **19,419** rows.
- Sample format:


