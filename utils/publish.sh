source backend/venv
python3 -m pip freeze > requirements.txt
git add .
git commit -m "$1"
git push -u origin main