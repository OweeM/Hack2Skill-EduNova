# from flask import Flask, request, jsonify, render_template
# import requests

# app = Flask(__name__)

# # Your YouTube API Key
# # API_KEY_YT = "AIzaSyBBvAoqs0h5ZmtPSbUmzXEIG_GF1yzclLU"
# YOUTUBE_API_KEY = "AIzaSyBBvAoqs0h5ZmtPSbUmzXEIG_GF1yzclLU"
# YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search"

# # def fetch_youtube_videos(query):
# #     url = f"https://www.googleapis.com/youtube/v3/search?key={API_KEY_YT}&q={query}&part=snippet&type=video"
# #     response = requests.get(url)
# #     data = response.json()
    
# #     videos = []
# #     for item in data.get("items", []):
# #         video_info = {
# #             "title": item["snippet"]["title"],
# #             "video_url": f"https://www.youtube.com/watch?v={item['id']['videoId']}",
# #             "thumbnail_url": item["snippet"]["thumbnails"]["high"]["url"]
# #         }
# #         videos.append(video_info)
    
# #     return videos

# @app.route('/')
# def index():
#     return render_template('platform.html')

# @app.route('/search', methods=['GET'])
# def search_videos():
#     query = request.args.get('query', '')
#     if not query:
#         return jsonify({"error": "Query parameter is missing"}), 400

#     params = {
#         'part': 'snippet',
#         'q': query,
#         'key': YOUTUBE_API_KEY,
#         'maxResults': 6,
#         'type': 'video'
#     }

#     response = requests.get(YOUTUBE_SEARCH_URL, params=params)
#     data = response.json()

#     videos = []
#     if 'items' in data:
#         for item in data['items']:
#             videos.append({
#                 'title': item['snippet']['title'],
#                 'videoId': item['id']['videoId'],
#                 'thumbnail': item['snippet']['thumbnails']['medium']['url']
#             })

#     return jsonify(videos)

# if __name__ == '__main__':
#     app.run(debug=True)
