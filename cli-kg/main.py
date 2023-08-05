# Table Definitions
projects = [
    (1, "Ordinautz"),
    (2, "MetaBRC"),
    (3, "Bitcoin Frogs"),
    (4, "Onchain Maxi Biz"),
    (5, "Onchain Monkeys"),
]

relationships = [
    (6, 1),
    (7, 2),
    (8, 3),
    (9, 4),
    (10, 5),
]

founders = {
    6: "Hantoshi",
    7: "Good",
    8: "Frogtoshi",
    9: "ZKShark",
    10: "Danny",
}

technologies = {
    1: "Recursive Inscription",
    2: "Recursive Inscription",
    3: "Inscription",
    4: "Inscription",
    5: "Recursive reinscription",
}

# Function to list projects
def list_projects():
    print("Choose a project:")
    for i, project in projects:
        print(f"{i}. {project}")

# Main CLI Interaction
def main():
    answer = input("Do you want to know the Ordinal Players? (Yes/No): ").strip().lower()
    if answer == "yes":
        list_projects()
        project_choice = int(input("Select a project by number: "))
        choice = input("Choose founder or technology: ").strip().lower()
        if choice == "founder":
            for rel in relationships:
                if rel[1] == project_choice:
                    print(f"Founder: {founders[rel[0]]}")
        elif choice == "technology":
            print(f"Technology: {technologies[project_choice]}")
        else:
            print("Invalid choice.")
    elif answer == "no":
        print("Few understand, you are the many.")
    else:
        print("Invalid response. Please answer with 'Yes' or 'No'.")

if __name__ == "__main__":
    main()
