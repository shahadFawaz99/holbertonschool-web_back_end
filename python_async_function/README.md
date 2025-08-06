# Python - Async

This project introduces asynchronous programming in Python using `async`, `await`, and `asyncio`. 
You’ll learn how to run concurrent tasks, create asynchronous functions and measure performance of async routines.

## Tasks

0. The basics of async  
-----------------------
File: 0-basic_async_syntax.py  
Defines an asynchronous coroutine `wait_random(max_delay=10)` that waits for a random delay 
(between 0 and max_delay) and returns it as a float.

1. Let's execute multiple coroutines at the same time with async  
-----------------------------------------------------------------
File: 1-concurrent_coroutines.py  
Defines an async routine `wait_n(n, max_delay)` that runs `wait_random` `n` times concurrently 
and returns a list of the delays in ascending order **without using .sort()**.

2. Measure the runtime  
-----------------------
File: 2-measure_runtime.py  
Defines a function `measure_time(n, max_delay)` that calculates the average execution time 
(total_time / n) of running `wait_n(n, max_delay)` using the `time` module.

3. Tasks  
--------
File: 3-tasks.py  
Defines a regular function `task_wait_random(max_delay)` that returns an `asyncio.Task` 
for the `wait_random` coroutine.

4. Tasks  
--------
File: 4-tasks.py  
Defines an async function `task_wait_n(n, max_delay)` similar to `wait_n`, 
but uses `task_wait_random` instead of `wait_random` to create tasks and await them.

## Usage

Each task file can be tested using its corresponding `*-main.py` file.  
Make sure to run Python 3.7+ to support async features properly.

$ python3 0-main.py
$ python3 1-main.py
...

## Author

Shahad Fawaz  
GitHub: https://github.com/shahadFawaz99

