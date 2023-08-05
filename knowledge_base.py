# import os

# knowledge_base_path = 'knowledge_base'

# Create a directory if it doesn't exist
# if not os.path.exists(knowledge_base_path):
#    os.makedirs(knowledge_base_path)

# entities = [
#    (1, "Project", "Ordinautz"),
#    (2, "Project", "MetaBRC"),
#    (3, "Project", "Bitcoin Frogs"),
#   (4, "Project", "Onchain Maxi Biz"),
#   (5, "Project", "Onchain Monkeys"),
#    (6, "Team", "Hantoshi"),
#    (7, "Team", "Good"),
#    (8, "Team", "Frogtoshi"),
#    (9, "Team", "ZKShark"),
#    (10, "Team", "Danny"),
#    (11, "Technology", "Recursive Inscription"),
#    (12, "Technology", "Inscription"),
#   (13, "Technology", "Recursive reinscription"),
#]

# Create text files for each entity
# for entity_id, entity_type, entity_name in entities:
#    filename = os.path.join(knowledge_base_path, f'{entity_name.replace(" ", "_")}.txt')
#    with open(filename, 'w') as file:
#        file.write(f"Entity ID: {entity_id}\n")
#        file.write(f"Entity Type: {entity_type}\n")
#        file.write(f"Entity Name: {entity_name}\n")
