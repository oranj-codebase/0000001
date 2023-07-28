CREATE
(:Project {entity_id: 1, name: 'Ordinautz'})
(:Project {entity_id: 2, name: 'MetaBRC'})
(:Project {entity_id: 3, name: 'Bitcoin Frogs'})
(:Project {entity_id: 4, name: 'Onchain Maxi Biz'})
(:Project {entity_id: 5, name: 'Onchain Monkeys'})
(:Team {entity_id: 6, name: 'Hantoshi'})
(:Team {entity_id: 7, name: 'Good'})
(:Team {entity_id: 8, name: 'Frogtoshi'})
(:Team {entity_id: 9, name: 'ZKShark'})
(:Team {entity_id: 10, name: 'Danny'})
(:Technology {entity_id: 11, name: 'Recursive Inscription'})
(:Technology {entity_id: 12, name: 'Inscription'})
(:Technology {entity_id: 13, name: 'Recursive Reinscription'})


MATCH 
(a:Team {entity_id: 6}), (b:Project {entity_id: 1}) CREATE (a)-[:WORKS_ON]->(b)
(a:Team {entity_id: 7}), (b:Project {entity_id: 2}) CREATE (a)-[:WORKS_ON]->(b)
(a:Team {entity_id: 8}), (b:Project {entity_id: 3}) CREATE (a)-[:WORKS_ON]->(b)
(a:Team {entity_id: 9}), (b:Project {entity_id: 4}) CREATE (a)-[:WORKS_ON]->(b)
(a:Team {entity_id: 10}), (b:Project {entity_id: 5}) CREATE (a)-[:WORKS_ON]->(b)
(a:Project {entity_id: 1}), (b:Technology {entity_id: 11}) CREATE (a)-[:USES]->(b)
(a:Project {entity_id: 2}), (b:Technology {entity_id: 11}) CREATE (a)-[:USES]->(b)
(a:Project {entity_id: 3}), (b:Technology {entity_id: 12}) CREATE (a)-[:USES]->(b)
(a:Project {entity_id: 4}), (b:Technology {entity_id: 12}) CREATE (a)-[:USES]->(b)
(a:Project {entity_id: 5}), (b:Technology {entity_id: 13}) CREATE (a)-[:USES]->(b)

