import streamlit as st

st.set_page_config(
    page_title="Mumbai Flood Risk System",
    page_icon="🌊",
    layout="wide"
)

st.title("🌊 Mumbai Flood Risk Analysis & Prediction System")

st.markdown("""
Welcome to the Mumbai Flood Risk Analysis Platform.

Use the sidebar to navigate:

• 📊 Data Visualization  
• 🌧 Flood Prediction  
• 🗺 Mumbai Flood Map  
""")

st.info("Built using Machine Learning + Streamlit")