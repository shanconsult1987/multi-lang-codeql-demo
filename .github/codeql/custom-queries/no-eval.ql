import javascript

from CallExpr call
where call.getCalleeName() = "eval"
select call, "Avoid eval usage"
