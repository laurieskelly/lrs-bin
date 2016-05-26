#handy shit

####[PEP8 whitespace](https://www.python.org/dev/peps/pep-0008/#whitespace-in-expressions-and-statements)
```python
Yes: spam(ham[1], {eggs: 2})
 No: spam( ham[ 1 ], { eggs: 2 } )

Yes: if x == 4: print x, y; x, y = y, x
 No: if x == 4 : print x , y ; x , y = y , x

Yes: ham[lower:upper]
Yes: ham[lower+offset : upper+offset]
Yes: ham[lower + offset : upper + offset]
 No: ham[lower + offset:upper + offset]
 
Yes: i = i + 1
 No: i=i+1
Yes: submitted += 1
 No: submitted +=1
Yes: x = x*2 - 1
 No: x = x * 2 - 1
Yes: hypot2 = x*x + y*y
 No: hypot2 = x * x + y * y
Yes: c = (a+b) * (a-b) 
 No: c = (a + b) * (a - b)

Yes: 
def complex(real, imag=0.0):
    return magic(r=real, i=imag)
No:
def complex(real, imag = 0.0):
    return magic(r = real, i = imag)

```

####run the simple http server
`python -m SimpleHTTPServer [port=8000]`

####make the python script executable
`\#!/usr/bin/env python `

####urllib2
```python
import urllib2

response = urllib2.urlopen("http://www.something.com")
html = response.read()
response.close()
```

####but yeah, just use `requests` tho, laurie of the past, brasephine
```python
import requests

r = requests.get("http://www.something.com")
html = r.contents()
```


####git, how do I do it?
handy cheetsheet: [pdf](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)

book I like: [Pro Git](https://progit.org/) by [Scott Chacon & Ben Straub](http://www.dunno.what)

caching your github password (os x): [instructions](https://help.github.com/articles/caching-your-github-password-in-git/)

#####github flavored markdown
markdown basics [link](https://help.github.com/articles/markdown-basics)  /  github flavored markdown [link](https://help.github.com/articles/github-flavored-markdown)

*python syntax highlighting*: start code block with

    ```python


#####handy soup --> pandas example
from this [stackoverflow](http://stackoverflow.com/questions/14487526/turning-beautifulsoup-output-into-matrix) answer
```python
import pandas as pd

table  = soup.find('table', attrs={'class': 'sortable statsb'})
header = [th.text for th in table.find('thead').select('th')]
header[:2] = ['',' ']
body   = [[td.text for td in row.select('td')]
             for row in table.findAll('tr', attrs = {"onmouseover":"hl(this)"})]
cols   =  zip(*body)
tbl_d  = {name:col for name, col in zip(header,cols)}

print pd.DataFrame(tbl_d, columns = header)
```

#####ipython notebook keyboard shortcuts 
     [esc]-h
from [ipython notebook docs](http://ipython.org/ipython-doc/rel-1.1.0/interactive/notebook.html)

###YAML  
>YAML ain't markup language

- [YAML home (yaml.org)](http://yaml.org/)   
- [PyYAML documentation](http://pyyaml.org/wiki/PyYAMLDocumentation) 
- [Syntax preview docs](http://www.yaml.org/spec/1.2/spec.html#Preview)
