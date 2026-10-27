# Global Fuel Price Analytics

A Flask + HTML + CSS + JavaScript website with an embedded Tableau Public dashboard.

## Run locally

```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

Then open http://127.0.0.1:5000

## Tableau
The website embeds the supplied public Tableau view:

https://public.tableau.com/app/profile/krishnakant.rathi/viz/GlobalAverageFuelPricesTrend2020-2026DashboardDone/GlobalFuelPricesandTaxationTrends2020-2026?publish=yes

If you later publish a separate Tableau Story, replace the iframe `src` in `templates/index.html` with the Story view URL.
