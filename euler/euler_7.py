# 10001st prime
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
# that the 6th prime is 13.

# What is the 10 001st prime number?

target = 10001


def find_target_prime(target):
    primes = [3]
    nth_prime = 3
    n = 2
    while n < target:
        nth_prime = find_next_prime(nth_prime,primes)
        n += 1

    return nth_prime

def find_next_prime(f,primes):
    while True:    
        f += 2

        for p in primes:
            if p > f/2: 
                primes.append(f)
                return f
            if f % p == 0:
                break
            
print find_target_prime(target)

