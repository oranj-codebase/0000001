// Entities table:

MERGE (:Central {name: 'Ordinal theory'});
MERGE (:Project {entity_id: 1, name: 'Ordinautz'});
MERGE (:Project {entity_id: 2, name: 'MetaBRC'});
MERGE (:Project {entity_id: 3, name: 'Bitcoin Frogs'});
MERGE (:Project {entity_id: 4, name: 'Onchain Maxi Biz'});
MERGE (:Project {entity_id: 5, name: 'Onchain Monkeys'});
MERGE (:Team {entity_id: 6, name: 'Hantoshi'});
MERGE (:Team {entity_id: 7, name: 'Good'});
MERGE (:Team {entity_id: 8, name: 'Frogtoshi'});
MERGE (:Team {entity_id: 9, name: 'ZKShark'});
MERGE (:Team {entity_id: 10, name: 'Danny'});
MERGE (:Technology {entity_id: 11, name: 'Recursive Inscription'});
MERGE (:Technology {entity_id: 12, name: 'Inscription'});
MERGE (:Technology {entity_id: 13, name: 'Recursive Reinscription'});

// Relationships table:

MATCH (a:Team {entity_id: 6}), (b:Project {entity_id: 1})
CREATE (a)-[:WORKS_ON]->(b);

MATCH (a:Team {entity_id: 7}), (b:Project {entity_id: 2})
CREATE (a)-[:WORKS_ON]->(b);

MATCH (a:Team {entity_id: 8}), (b:Project {entity_id: 3})
CREATE (a)-[:WORKS_ON]->(b);

MATCH (a:Team {entity_id: 9}), (b:Project {entity_id: 4})
CREATE (a)-[:WORKS_ON]->(b);

MATCH (a:Team {entity_id: 10}), (b:Project {entity_id: 5})
CREATE (a)-[:WORKS_ON]->(b);

MATCH (a:Project {entity_id: 1}), (b:Technology {entity_id: 11})
CREATE (a)-[:USES]->(b);

MATCH (a:Project {entity_id: 2}), (b:Technology {entity_id: 11})
CREATE (a)-[:USES]->(b);

MATCH (a:Project {entity_id: 3}), (b:Technology {entity_id: 12})
CREATE (a)-[:USES]->(b);

MATCH (a:Project {entity_id: 4}), (b:Technology {entity_id: 12})
CREATE (a)-[:USES]->(b);

MATCH (a:Project {entity_id: 5}), (b:Technology {entity_id: 13})
CREATE (a)-[:USES]->(b);


// Connecting to "Ordinal theory":

MATCH (a:Central {name: 'Ordinal theory'})
WITH a
MATCH (b:Project)
CREATE (a)-[:CONTAINS]->(b);

MATCH (a:Central {name: 'Ordinal theory'})
WITH a
MATCH (b:Team)
CREATE (a)-[:CONTAINS]->(b);

MATCH (a:Central {name: 'Ordinal theory'})
WITH a
MATCH (b:Technology)
CREATE (a)-[:CONTAINS]->(b);
