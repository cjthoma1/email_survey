function localtunnel {
    lt -s craywebhook12c12t --port 5000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done