source backend/env/bin/activate
python3 -m pip freeze > backend/requirements.txt
git add .
git commit -m "$1"
git push -u origin main