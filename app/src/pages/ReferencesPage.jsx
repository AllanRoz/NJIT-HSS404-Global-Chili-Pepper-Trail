import React, { useEffect } from "react";
import { Box, Typography, Divider, Link } from "@mui/material";

export default function ReferencesPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        p: 4,
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        backgroundColor: "#242424",
      }}
    >
      <Box sx={{ p: 4, maxWidth: "700px", mx: "auto" }} elevation={3}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Works Cited
        </Typography>

        <Typography variant="h5">
          1. Origin of Chili Peppers - History Cooperative
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Maup van de Kerkhof, "Origin of Chili: Does Chili Come from Ancient
          Mesoamerica?", History Cooperative, August 8, 2023,{" "}
          <Link
            href="https://historycooperative.org/origin-of-chili/"
            target="_blank"
          >
            https://historycooperative.org/origin-of-chili/
          </Link>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">
          2. A Brief History of Chili Peppers - LEGAL NOMADS
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Ettenberg, Jodi. “A Brief History of Chili Peppers.” Legal Nomads,
          October 1, 2025,{" "}
          <Link
            href="https://www.legalnomads.com/history-chili-peppers/"
            target="_blank"
          >
            https://www.legalnomads.com/history-chili-peppers/
          </Link>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">
          3. Chilli's Complicated history - Bangkok Post
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Sukphist, Suthon. “Chilli’s Complicated History.”, Bangkok Post, 5 May
          2019,
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5">
          4. The Medieval Spice Trade and the Diffusion of the Chile - JSTOR
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Wright, Clifford a. “The Medieval Spice Trade and the Diffusion of the
          Chile.” Gastronomica, vol. 7, no. 2, 2007, pp. 35–43. JSTOR,{" "}
          <Link href="https://doi.org/10.1525/gfc.2007.7.2.35" target="_blank">
            https://doi.org/10.1525/gfc.2007.7.2.35
          </Link>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">5. THE SPICE TRADE - JSTOR</Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          STONE, B. G. “THE SPICE TRADE.” Journal of the Royal Society of Arts,
          vol. 112, no. 5097, 1964, pp. 703–13. JSTOR,{" "}
          <Link href="http://www.jstor.org/stable/41367670" target="_blank">
            http://www.jstor.org/stable/41367670
          </Link>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">
          6. Origin of Domesticated Chili Pepper - JSTOR
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Kraft, Kraig H., et al. “Multiple Lines of Evidence for the Origin of
          Domesticated Chili Pepper, Capsicum Annuum, in Mexico.” Proceedings of
          the National Academy of Sciences of the United States of America, vol.
          111, no. 17, 2014, pp. 6165–70. JSTOR,{" "}
          <Link href="http://www.jstor.org/stable/23772471" target="_blank">
            http://www.jstor.org/stable/23772471
          </Link>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">7. Capsicum Pepper Origin -JSTOR</Typography>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Nunn, Nathan, and Nancy Qian. “The Columbian Exchange: A History of
          Disease, Food, and Ideas.” The Journal of Economic Perspectives, vol.
          24, no. 2, 2010, pp. 163–88. JSTOR,{" "}
          <Link href="http://www.jstor.org/stable/25703506" target="_blank">
            http://www.jstor.org/stable/25703506
          </Link>
        </Typography>
        <Divider sx={{ mt: 4 }} />
      </Box>
    </Box>
  );
}
