import os
import socketserver
from http.server import SimpleHTTPRequestHandler

class ReactRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # serve files from the React build directory
        self.directory = os.path.join(os.path.dirname(__file__), 'build') # React build dir
        super().__init__(*args, directory=self.directory, **kwargs) # set directory

    def do_GET(self):
        # support React client-side routing by serving index.html for unknown paths
        path = self.translate_path(self.path) # path file to system path
        if not os.path.exists(path) or os.path.isdir(path): # path does not exist? send index.html instead
            self.path = '/index.html'
        return super().do_GET()

if __name__ == "__main__":
    HOST = "0.0.0.0" 
    PORT = 2000
    with socketserver.TCPServer((HOST, PORT), ReactRequestHandler) as httpd:
        print(f"Serving React app at http://{HOST}:{PORT}")
        httpd.serve_forever()
