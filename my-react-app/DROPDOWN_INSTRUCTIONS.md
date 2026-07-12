# How to Add Dropdown About Section

## Step 1: Add state in App.jsx
Add this useState hook after your existing states (around line 22):
```jsx
const [showAbout, setShowAbout] = useState(false)
```

## Step 2: Add the dropdown button in Hero
Replace your "Know more" button with this:
```jsx
<button className="btn btn-primary" onClick={() => setShowAbout(!showAbout)}>
  {showAbout ? 'Close' : 'Know more'}
</button>
```

## Step 3: Make About section collapsible
Wrap your About section content conditionally:
```jsx
<section id="about" className={`section ${showAbout ? 'open' : ''}`}>
  <div className="container">
    {/* existing content */}
  </div>
</section>
```

## Step 4: Add CSS for collapse animation
Add this to App.css:
```css
/* Collapsible About Section */
#about {
  max-height: 0;
  overflow: hidden;
  padding: 0;
  transition: all 0.5s ease;
  opacity: 0;
}

#about.open {
  max-height: 2000px;
  padding: 6rem 0;
  opacity: 1;
}
```

## Note:
Remove the `id="about"` from the section and add it to a wrapper div inside if you want smooth animation, or use JavaScript to calculate scroll height for better animation.
