function Pos(x,y)
{
  this.x = x;
  this.y = y;

  this.toString = function()
  {
    return x+","+y;
  }

  this.sub = function(pos2)
  {
    return new Pos(this.x - pos2.x,this.y - pos2.y)
  }

  this.add = function(pos2)
  {
    return new Pos(this.x + pos2.x,this.y + pos2.y)
  }

  this.is_equal = function(pos2)
  {
    return Math.abs(pos2.x) == Math.abs(this.x) && Math.abs(pos2.y) == Math.abs(this.y);
  }

  this.scale = function(a)
  {
    return new Pos(this.x*a,this.y*a)
  }

  this.mirror = function(x = -1,y = 1)
  {
    return new Pos(this.x * x,this.y * y);
  }

  this.clamp = function(min,max)
  {
    return new Pos(clamp(this.x,min,max),clamp(this.y,min,max));
  }

  function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }
}