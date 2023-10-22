import pandas as pd

df = pd.read_csv('../raw_data/primeira_extracao.csv')

df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d')

teste = df.groupby(['date','Campaign Name'])\
.agg({'Reach (Estimated)':'sum'})\
.reset_index()\
.pivot_table(index='date', columns='Campaign Name')

teste.to_json('teste.json')
