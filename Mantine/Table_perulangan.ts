<Box
     sx={{ overflow: "scroll"}}>
                  <Table>
                    <thead>
                      <tr>
                        {_.keys(targetStruktur).map((v, i) => (
                          <th key={i}>
                            <Title order={5}>{_.upperCase(v)}</Title>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {_.values(targetStruktur).map((v, i) => (
                          <td key={i}>{v}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </Box>
