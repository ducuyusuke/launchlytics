import pandas as pd
import sys

def data_proc(data_inicio, data_fim):
    '''
    data_inicio = str
    data_fim = str
    '''
    df = pd.read_csv('../raw_data/primeira_extracao.csv')

    df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d')

    # Definindo as datas de início e fim para o período desejado
    data_inicio = pd.to_datetime(data_inicio)
    data_fim = pd.to_datetime(data_fim)

    # Filtrando o DataFrame entre as datas de início e fim
    df_filtrado = df.loc[(df['Date'] >= data_inicio) & (df['Date'] <= data_fim)]

    teste = df_filtrado.groupby(['Date','Campaign Name'])\
    .agg({'Reach (Estimated)':'sum'})\
    .reset_index()\
    .pivot_table(index='Date', columns='Campaign Name')

    teste.to_json('teste.json')

if __name__ == "__main__":
    data_inicio = sys.argv[1]
    data_fim = sys.argv[2]

    data_proc(data_inicio, data_fim)
