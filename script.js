tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkBg: '#0d0f12',
        cardBg: 'rgba(25, 30, 38, 0.75)',
        cardHover: 'rgba(38, 45, 56, 0.9)',
        accentBlue: '#3b82f6',
        accentPurple: '#8b5cf6',
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const profileImage = document.getElementById('profile-image');
  profileImage.addEventListener('error', () => {
    profileImage.src = 'https://placehold.co/150x150/1f2937/ffffff?text=User';
  }, { once: true });
});
