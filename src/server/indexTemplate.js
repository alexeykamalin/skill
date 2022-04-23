export const indexTemplate = (content) => `
<html>
    <head>
        <meta charset="utf-8">
        <script src="/static/client.js" type="application/javascript"></script>
    </head>
    <body>
        <div id='react_root'>${content}</div>
    </body>
</html>
`
