CREATE FUNCTION disc (a integer, b integer, c integer)
  RETURNS text
  LANGUAGE plpython3u;
AS $$
  disc = b * b - 4 * a * c
  if disc < 0:
    return 'None'
  if disc == 0:
    res = (-1 * b)/(2*a)
    return f'{res}'
  if disc > 0:
    res1 = (-1 * b + disc ** (0.5) )/(2*a)
    res2 = (-1 * b - (disc ** (0.5)) )/(2*a)
    return f'{res1} {res2}'
$$ 