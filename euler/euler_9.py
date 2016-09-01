# -*- coding: utf-8 -*-

# Special Pythagorean triplet
# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
# a2 + b2 = c2

# For example, 32 + 42 = 9 + 16 = 25 = 52.

# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

import math

target = 1000

def main():
    a,b,c = special_triplet(target)
    print a, b, c
    return a * b * c

def special_triplet(target): 
    # get the squares less than target squared
    squares = get_squares_less_than(target**2)
    
    # starting at the largest, see if there are 2 other squares that add up to 1000 - the square
    while True:
        c2 = squares.pop()
        c = math.sqrt(c2)
        a_plus_b = 1000 - c
        for a2 in squares:
            a = math.sqrt(a2)
            b = a_plus_b - a
            b2 = b**2
            if b>0 and b2 in squares:
                if is_pythag_triple(a2,b2,c2):
                    return (a,b,c)

def is_pythag_triple(a2,b2,c2):
    return c2 == a2 + b2

def get_squares_less_than(target):
    squares = []
    i = 1
    while True:
        next = i**2
        if next > target:
            return squares
        else: 
            squares.append(next)
            i += 1


print main()