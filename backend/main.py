from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4

app = FastAPI()

@app.get('/')
async def index():
    users = []
    for i in range(10): 
        user = {
            "id":str(uuid4()), 
            "name":f"User {i+1}", 
            "designation": f"Designation {i+1}"
        }
        users.append(user)
    return users


origins = [
    "http://localhost:4200", 
    "http://localhost" 

]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)