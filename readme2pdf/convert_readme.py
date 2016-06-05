#!/usr/bin/env python
#encoding utf-8

import sys
from markdown import Markdown
from mdx_linkify.mdx_linkify import LinkifyExtension

BASE_URL = 'https://github.com/thisismetis/sf16_ds1/tree/master/'

def dont_linkify_extensions(attrs, new=False):
#    if attrs["_text"].endswith(".md"):
#        return None
    if attrs["_text"].endswith(".txt"):
        return None

    return attrs

def apply_template(html,template='template.html'):

    with open(template, 'r') as infile:
        template = infile.read().decode('utf-8')
        formatted_html = template.replace('{{ readme }}',html).encode('utf-8')

    return formatted_html

def format_github_readme(filename):

    md = md_from_file(filename)
    html = html_from_md(md)

    return apply_template(html)

def md_from_file(file):

    with open(file,'r') as infile:
        reader = infile.readlines()

    md = ''

    for line in reader:
        line = line.decode('utf-8')
        line = line.replace('](/', '](' + BASE_URL + '/' )
        md = md + line

    return md

def html_from_md(md):

    mkd = Markdown(
        extensions=[
            'tables',
            'fenced_code',
            'codehilite',
            'toc',
            'sane_lists',
            'linkify'
        ],
    )
    html = mkd.convert(md)

    return html


if __name__ == '__main__':
    if len(sys.argv) > 1:
        filename = sys.argv[1]

    print >> sys.stdout, format_github_readme(filename)
