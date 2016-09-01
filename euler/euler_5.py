# Smallest Mulitple

# 2520 is the smallest number that can be divided by each of the numbers from
# 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the
# numbers from 1 to 20?

largest = 20
primes = [2,3,5,7,11,13,17,19]

def prime_factors(n):
    ans = []
    for prime in primes:
        while n % prime == 0:
            if n in primes:
                ans.append(n)
                return ans
            ans.append(prime)
            n = n/prime
            
def product_of_all(factors):
    return eval('*'.join([str(f) for f in factors]))

def smallest_multiple(n):
    factors = []
    for num in xrange(2, n+1):
        # get prime factors
        pf = prime_factors(num)
        # update factors to include enough of each
        for f in iter(set(pf)):
            while factors.count(f) < pf.count(f):
                factors.append(f)
    return product_of_all(factors)

print smallest_multiple(largest)