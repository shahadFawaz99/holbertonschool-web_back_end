# Python - Async Comprehensions

This project covers asynchronous generators, async comprehensions, and measuring runtime of async coroutines in Python using asyncio.

## Tasks

0. Async Generator
------------------
File: 0-async_generator.py  
Write a coroutine async_generator that loops 10 times,  
each time asynchronously waits 1 second,  
then yields a random float number between 0 and 10.

1. Async Comprehensions
-----------------------
File: 1-async_comprehension.py  
Import async_generator and write a coroutine async_comprehension  
that collects 10 random numbers from async_generator using an async comprehension,  
then returns the list.

2. Run time for four parallel comprehensions
--------------------------------------------
File: 2-measure_runtime.py  
Import async_comprehension and write a coroutine measure_runtime  
that runs four async_comprehension coroutines in parallel using asyncio.gather,  
measures total runtime, and returns it.

Note: Total runtime is approximately 10 seconds due to concurrency.

## Author

Shahad Fawaz  
GitHub: https://github.com/shahadFawaz99

