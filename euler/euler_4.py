# A palindromic number reads the same both ways. The largest palindrome made
# from the product of two 2-digit numbers is 9009 = 91 x 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

digits = 3

def largest_palindromic_product(ndigits):
    largest = 10**ndigits - 1
    
    if is_palindrome(largest**2):
        return largest**2
    f1 = largest - 1
    
    largest_palindrome = 0
    while f1 > 10**(ndigits-1):
        # print 'New f1: ',f1
        # for each integer (f2) from largest down to f1
        for f2 in xrange(largest,f1,-1):
            # print f1, f2, f1*f2
            # check if f1 * f2 is a palindrome
            if is_palindrome(f1*f2):
                if f1 * f2 > largest_palindrome:
                    largest_palindrome = f1*f2
        f1 -= 1
    return largest_palindrome

def is_palindrome(n):
    strn = str(n)
    i = 0
    while i <= len(strn)/2:
        if strn[i] != strn[-(i+1)]:
            return False
        i += 1
    return True

largest = largest_palindromic_product(digits)
print 'answer:', largest