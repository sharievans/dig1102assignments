flowerflirt44/raphael/raphael.core.js/59

```javascript
function R(first) {
        if (R.is(first, "function")) 
        {
            return loaded ? first() : eve.on("raphael.DOMload", first);
        } 
        
        else if (R.is(first, array)) 
        {
            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
        } 
        
        else 
        {
            var args = Array.prototype.slice.call(arguments, 0);
            if (R.is(args[args.length - 1], "function")) 
            {
                var f = args.pop();
                return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
                    f.call(R._engine.create[apply](R, args));
                });
            } 
            
            else 
            {
                return R._engine.create[apply](R, arguments);
            }
        }
    }
// Invocations: 76 
    R.version = "2.1.0";
    R.eve = eve;
 
 // Invocations: 157
        ISURL = R._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
```
Function name: R
Argument: first

return loaded ? first() : eve.on("raphael.DOMload", first);
return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
return R._engine.create[apply](R, arguments);


flowerflirt44/raphael/raphael.core.js/399
```javascript
    function clone(obj) {
        if (Object(obj) !== obj) {
            return obj;
        }
        var res = new obj.constructor;
        for (var key in obj) if (obj[has](key)) {
            res[key] = clone(obj[key]);
        }
        return res;
    }
```
Function name: clone
Argument: obj
return obj;
return res;
No outside invocations        

