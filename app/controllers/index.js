// Index Controller

export function helloWorld(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
    }

 export function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Goodbye World');
}   