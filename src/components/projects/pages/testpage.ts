
export const testpage = ["Markdown Notes", `

### Notes compiled December 22, 2021.

# This is h1.
## This is h2
### This is h3
#### This is h4
##### This is h5
###### This is h6 (Why would you use this...?)

This is normal text rendered with \`\`<p>\`\`. Don't change color if you don't want all
other components to be affected (just don't)

\`\`This is monospace font rendered with <code></code>.\`\`

> This is a blockquote, html is \`\`<blockquote></blockquote>\`\`.

1. This is an ordered list.
2. For some reason the numbers don't show up
3. if you don't have \`\`overflow-x: auto\`\` in the css. Oh well.

- This is an unordered list.
- I'd just use this one.

---

A horizontal rule can be added with \`\`---\`\`.

\`\`\`javascript
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

This is a footnoted sentence made with \`\`[^1]\`\`. [^1]

[^1]: This is a footnote that shows up at the very very end of the document.

- [ ] This is a task, a sort of list item with \`\`- [ ]\`\`. 
- [x] You can use \`\`- [x]\`\` instead to cross it out.

~~Strikesthroughs are double tilde.~~

Links generate automatically from plaintext: https://wikilabs.dev

You can give links a name with \`\`[text](src)\`\` like osu profiles.

* Asterisks also work
* for making lists.

Images are made with the format \`\`![alt](src)\`\`. However, you can't scale them.

![sheesh](https://ih1.redbubble.net/image.2381237357.3179/st,small,280x280-pad,300x300,f8f8f8.jpg)

Or you can use actual html tags, but you have to include rehype-raw. Probably not good practice, but sometimes you gotta.

Tables are also kind of cool:

\`\`\`
| Syntax      | Description | Thing       | 
| :---------- | :---------: | ----------: | 
| Header      | Title       | Other       | 
| Paragraph   | Text        | Thing       | 
\`\`\`

gets you

| Syntax      | Description | Thing       | 
| :---------- | :---------: | ----------: | 
| Header      | Title       | Other       | 
| Paragraph   | Text        | Thing       | 

of course, lots of custom CSS was applied to get this to look nice.

Note the colons for aligning purposes.
`]