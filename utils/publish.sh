source backend/env/bin/activate
python3 -m pip freeze > backend/requirements.txt
cd frontend 
yarn build 
mv dist ../backend/dist
cd ..
git add .
git commit -m "$1"
git push -u origin main