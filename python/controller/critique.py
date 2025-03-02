import request.request as req

def add_critique(data):
    print(data, flush=True)
    if (not "texte" in data or data["texte"] == ""):
        return False
    
    if (not "note" in data or data["note"] == ""):
        return False

    nom = data["nom"] if "nom" in data else "Anonyme"

    prenom = data["prenom"] if "prenom" in data else "Anonyme"

    if ("critique_id" in data and data["critique_id"]):
      requete = f"UPDATE critiques SET texte='{data['texte']}', note='{data['note']}', nom={data['nom']}, prenom={data['prenom']} WHERE critique_id = {data['critique_id']}"
      req.insert_in_db(requete)
      id = data['critique_id']
    else:
      requete = "INSERT INTO critiques (texte, note, nom, prenom) VALUES (?, ?, ?, ?);"
      id = req.insert_in_db(requete, (data["texte"], data["note"], data["nom"], data["prenom"]))

    return id

def get_all_critique():
    json = req.select_from_db("SELECT * FROM critiques")
    
    return json

def get_critique(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM critiques WHERE critique_id = ?", (id,))

    if len(json) > 0:
        return json[0]
    else:
        return []

def delete_critique(id):
    if (not id):
        return False

    req.delete_from_db("DELETE FROM critiques WHERE critique_id = ?", (id,))

    return True