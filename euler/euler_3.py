# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

num = 600851475143
# num = 13195

def largest_prime_factor(number):
    i = 2
    n = number * 1.0
    largest_factor = num
    while True:
        if i >= n:
            return largest_factor
        while int(n/i) == n/i:
            n = n/i
        largest_factor = int(n)
        i += 1

print largest_prime_factor(num)

# def factor_less_than(n,num):
#     '''Returns largest factor of num that is less than the given integer n'''
#     pass


# def is_prime(n):
#     '''Returns true if input integer n is prime, otherwise returns false.'''
#     ans = false

#     return ans