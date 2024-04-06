<script>
        var apiKey = 'WGg7kisl';

        function textToSpeech() {
            var text = document.getElementById('textInput').value;
            var selectedLanguage = document.querySelector('input[name="language"]:checked').value;

            responsiveVoice.speak(text, selectedLanguage, {
                key: apiKey
            });
        }
    </script>

    <script>
        function openSidebar() {
            document.getElementById('sidebar').style.left = '0';
            document.getElementById('main').style.marginLeft = 'Q0px';
        }

        function closeSidebar() {
            document.getElementById('sidebar').style.left = '-250px';
            document.getElementById('main').style.marginLeft = '0';
        }
    </script>

<script>
    <button onclick="textToSpeech()">Convert to Speech</button>
    <textarea id="textInput" placeholder="Enter text..."></textarea>
    <script src="https://code.responsivevoice.org/responsivevoice.js?key=WGg7kisl"></script>
</script>
