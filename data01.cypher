// Entities table:


CREATE (:Project {entity_id: 1, name: 'Ordinautz'})
CREATE (:Project {entity_id: 2, name: 'MetaBRC'})
CREATE (:Project {entity_id: 3, name: 'Bitcoin Frogs'})
CREATE (:Project {entity_id: 4, name: 'Onchain Maxi Biz'})
CREATE (:Project {entity_id: 5, name: 'Onchain Monkeys'})
CREATE (:Team {entity_id: 6, name: 'Hantoshi'})
CREATE (:Team {entity_id: 7, name: 'Good'})
CREATE (:Team {entity_id: 8, name: 'Frogtoshi'})
CREATE (:Team {entity_id: 9, name: 'ZKShark'})
CREATE (:Team {entity_id: 10, name: 'Danny'})
CREATE (:Technology {entity_id: 11, name: 'Recursive Inscription'})
CREATE (:Technology {entity_id: 12, name: 'Inscription'})
CREATE (:Technology {entity_id: 13, name: 'Recursive Reinscription'})

// Relationships table:

MATCH (a:Team {entity_id: 6}), (b:Project {entity_id: 1}) CREATE (a)-[:WORKS_ON]->(b);
MATCH (a:Team {entity_id: 7}), (b:Project {entity_id: 2}) CREATE (a)-[:WORKS_ON]->(b);
MATCH (a:Team {entity_id: 8}), (b:Project {entity_id: 3}) CREATE (a)-[:WORKS_ON]->(b);
MATCH (a:Team {entity_id: 9}), (b:Project {entity_id: 4}) CREATE (a)-[:WORKS_ON]->(b);
MATCH (a:Team {entity_id: 10}), (b:Project {entity_id: 5}) CREATE (a)-[:WORKS_ON]->(b);
MATCH (a:Project {entity_id: 1}), (b:Technology {entity_id: 11}) CREATE (a)-[:USES]->(b);
MATCH (a:Project {entity_id: 2}), (b:Technology {entity_id: 11}) CREATE (a)-[:USES]->(b);
MATCH (a:Project {entity_id: 3}), (b:Technology {entity_id: 12}) CREATE (a)-[:USES]->(b);
MATCH (a:Project {entity_id: 4}), (b:Technology {entity_id: 12}) CREATE (a)-[:USES]->(b);
MATCH (a:Project {entity_id: 5}), (b:Technology {entity_id: 13}) CREATE (a)-[:USES]->(b);
