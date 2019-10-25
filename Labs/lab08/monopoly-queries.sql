--Name: Enoch Mwesigwa
--Date: 10/25/19
--Section: B


----------------------------------------
--             Part 1                 --
----------------------------------------

--Retrieve a list of all the games, ordered by date with the most recent game coming first.
SELECT * 
  FROM Game
ORDER BY TIME DESC;

--Retrieve all the games that occurred in the past week.
SELECT *
  FROM Game
 WHERE TIME > '2019-10-18 00:00:00';
--Retrieve a list of players who have (non-NULL) names.
SELECT *
FROM Player
WHERE name IS NOT NULL;
--Retrieve a list of IDs for players who have some cash amount (changed from score, it's the same idea SQL wise) larger than 2000.
SELECT PlayerID
  FROM PlayerGame
  WHERE cash > 2000;

--Retrieve a list of players who have GMail accounts.
SELECT *
  FROM Player
 WHERE emailAddress LIKE '%gmail%';


----------------------------------------
--             Part 2                 --
----------------------------------------

--Retrieve all “The King”’s game cash amounts (changed from score, it's the same idea SQL wise) in decreasing order.
SELECT pg.cash 
  FROM PlayerGame pg, Player p
  WHERE pg.PlayerID = p.ID
    AND p.name = 'The King';
--Retrieve the name of the person with the most cash(changed from score, it's the same idea SQL wise) of the game played on 2006-06-28 13:20:00.
SELECT p.name
  FROM Player p, PlayerGame pg
  WHERE p.ID = pg.PlayerID 
  ORDER BY pg.cash DESC
  LIMIT 1;
--So what does that P1.ID < P2.ID clause do in the last example query?
  --makes sure that they aren't the same entry.
--The query that joined the Player table to itself seems rather contrived. Can you think of a realistic situation in which you’d want to join a table to itself?
  -- it would allow you to compare rows within the same table