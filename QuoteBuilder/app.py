import os
import sys
import webview

def get_asset_path(relative_path):
    """Get absolute path to resource, works for dev and for PyInstaller"""
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)

html_path = get_asset_path('index.html')

webview.create_window('Quick Quote', html_path)
webview.start()