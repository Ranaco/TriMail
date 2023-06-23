const fetchReports = async (interest: string) => {
  let reports = [];
  const apiUrl = "https://api.core.ac.uk/v3/search/journals";
  const parsedUrl = apiUrl + `/?q=${interest}`;
  const apiKey = process.env.NEXT_PUBLIC_CORE_KEY;
  const rawData = await fetch(parsedUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      ContentType: "application/json",
    },
  });

  const data = await rawData.json();

  if (data) {
    data.results.map((e: any) => {
      const parsedData = {
        title: e.title,
        publisher: e.publisher,
        topics: e.subjects.slice(0, 2),
        language: e.language,
        url: (
          e.identifiers.filter((e: string[]) => e.includes("url"))[0] as String
        ).slice(4),
      };
      reports.push(parsedData);
    });

    return reports;
  }
  return [];
};

export default fetchReports;
