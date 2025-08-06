# Python - Variable Annotations

This project focuses on learning **type annotations** in Python 3. It includes defining functions and variables with precise type hints using Python’s `typing` module.

---

## Tasks

### 0. Basic annotations - add
**File:** `0-add.py`  
Defines a function `add(a: float, b: float) -> float` that returns the sum of two float numbers.

---

### 1. Basic annotations - concat
**File:** `1-concat.py`  
Defines a function `concat(str1: str, str2: str) -> str` that returns the concatenation of two strings.

---

### 2. Basic annotations - floor
**File:** `2-floor.py`  
Defines a function `floor(n: float) -> int` that returns the floor of a float.

---

### 3. Basic annotations - to string
**File:** `3-to_str.py`  
Defines a function `to_str(n: float) -> str` that returns the string representation of a float.

---

### 4. Define variables
**File:** `4-define_variables.py`  
Defines and annotates four variables with the following types:
- `a: int` = 1  
- `pi: float` = 3.14  
- `i_understand_annotations: bool` = True  
- `school: str` = "Holberton"

---

### 5. Complex types - list of floats
**File:** `5-sum_list.py`  
Defines a function `sum_list(input_list: List[float]) -> float` that returns the sum of a list of floats.

---

### 6. Complex types - mixed list
**File:** `6-sum_mixed_list.py`  
Defines a function `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float` that returns the sum of a list containing ints and floats.

---

### 7. Complex types - string and int/float to tuple
**File:** `7-to_kv.py`  
Defines a function `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]` that returns a tuple with a string and the square of the number (as float).

---

### 8. Complex types - functions
**File:** `8-make_multiplier.py`  
Defines a function `make_multiplier(multiplier: float) -> Callable[[float], float]` that returns a function to multiply a float by `multiplier`.

---

### 9. Duck typing - iterable object
**File:** `9-element_length.py`  
Defines a function `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]` that returns a list of tuples with each element and its length.

---

## Usage

Each file can be tested using the corresponding `*-main.py` file provided in the project description.

---

## Author

Shahad Fawaz  
[GitHub: @shahadFawaz99](https://github.com/shahadFawaz99)

