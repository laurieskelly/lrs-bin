#handy shit

#####run the simple http server
python -m SimpleHTTPServer [port=8000]

#####make the python script executable
\#!/usr/bin/env python 

#####urllib2
```python
import urllib2
response = urllib2.urlopen("http://www.something.com")
html = response.read()
response.close()
```

#####git cheatsheet
handy cheetsheet [pdf](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)

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
```[esc]-h

from [ipython notebook docs](http://ipython.org/ipython-doc/rel-1.1.0/interactive/notebook.html)
